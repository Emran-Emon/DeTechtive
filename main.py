import streamlit as st
import pandas as pd
import json
from pgmpy.inference import VariableElimination

# Importing the "factory" functions from our logic file
from supports.batcomputer_logic import create_mystery_model, create_graphviz_plot

# --- 1. App Setup ---
st.set_page_config(page_title="DeTechtive", page_icon="🦇", layout="wide")
st.title("🦇 DeTechtive: The Batcomputer")

# --- 2. Loading All Scenarios ---
@st.cache_data
def load_scenarios():
    """Load all mystery scenarios from the JSON file."""
    try:
        # Loading from the 'data' subfolder
        with open('data/gotham_mysteries.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        st.error("FATAL ERROR: 'data/gotham_mysteries.json' not found.")
        return {}

scenarios = load_scenarios()
if not scenarios:
    st.stop() # Stop if the JSON file is missing or empty

# --- 3. User Scenario Selection ---
st.markdown("Welcome, Batman. Select a case file to begin your investigation.")

# Creating a dropdown menu of all available cases
selected_scenario_key = st.selectbox(
    "Select a Case File:",
    options=list(scenarios.keys()),
    format_func=lambda key: scenarios[key]['title'] # Show the "nice title"
)

# Loading the data for the one case the user selected
selected_scenario_data = scenarios[selected_scenario_key]

# --- 4. Dynamically Build the Model & UI ---
try:
    # Building the network and creating the inference engine
    model = create_mystery_model(selected_scenario_data)
    inference = VariableElimination(model)
    suspects = selected_scenario_data['suspects']
    clues = selected_scenario_data['clues']
except Exception as e:
    st.error(f"Error building Bayesian network for this case: {e}")
    st.stop()

# --- 5. Displaying Case Info & Network Graph ---
col1, col2 = st.columns(2)
with col1:
    st.header(selected_scenario_data['title'])
    st.write(selected_scenario_data['description'])
with col2:
    st.subheader("Case Logic Structure")
    # Displaying the visual graph of the network
    st.graphviz_chart(create_graphviz_plot(model))

st.markdown("---")

# --- 6. Sidebar for DYNAMIC Clue Input ---
st.sidebar.header("Evidence Log")
evidence = {}
# Dynamically create a checkbox for each clue in the selected mystery
for clue_id, clue_info in clues.items():
    # We use a unique key to prevent bugs when switching scenarios
    if st.sidebar.checkbox(clue_info['label'], key=f"{selected_scenario_key}_{clue_id}"):
        evidence[clue_id] = 1  # 1 means True

# --- 7. Running Inference & Display Results ---
if not evidence:
    st.subheader("Initial Suspect Assessment (Prior Probabilities):")
    result = inference.query(variables=['GuiltyVillain'])
else:
    st.subheader("Analysis Based on Current Evidence:")
    # Showing the friendly labels for the evidence
    st.write("Evidence provided:", [clues[key]['label'] for key in evidence.keys()])
    result = inference.query(
        variables=['GuiltyVillain'],
        evidence=evidence
    )

# Formatting and displaying the results
probabilities = result.values
df = pd.DataFrame({'Suspect': suspects, 'Probability of Guilt': probabilities})
df = df.sort_values(by='Probability of Guilt', ascending=False)

# Displaying the formatted table and the bar chart
st.dataframe(df.style.format({'Probability of Guilt': '{:.2%}'}), use_container_width=True)
st.bar_chart(df.set_index('Suspect'))
