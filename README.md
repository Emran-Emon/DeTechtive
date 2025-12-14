# 🦇 DeTechtive: The Batcomputer

A sophisticated mystery-solving application that uses Bayesian networks and probabilistic inference to solve fictional Gotham City crime scenarios. Built with `Streamlit` and powered by `pgmpy`, DeTechtive helps you identify the most likely culprit based on collected evidence.

---

## 📋 Overview

DeTechtive simulates detective work by applying Bayesian probability theory to crime scene investigation. Users can select from multiple mystery scenarios, collect evidence through an interactive interface, and watch as the system calculates the probability of guilt for each suspect in real time.

### Key Capabilities

- Dynamic Bayesian network construction
- Real-time probabilistic inference
- Visual network graphs
- Multiple mystery scenarios
- Interactive evidence collection

---

## 🎯 Features

### Core Functionality

- **Probabilistic Reasoning**  
  Uses the Variable Elimination algorithm for exact inference.

- **Dynamic Case Loading**  
  All mystery scenarios are loaded from a JSON configuration file.

- **Interactive UI**  
  Built with `Streamlit` for a clean and responsive experience.

- **Visual Analytics**  
  Probability bar charts and formatted tables for analysis.

- **Network Visualization**  
  Graphviz integration for displaying Bayesian network structure.

---

## 🕵️ Available Cases

1. **The Gotham Bank Heist** — A chaotic but clever bank robbery
2. **The Arkham Asylum Breakout** — A suspicious escape during a riot
3. **The GCPD Sabotage** — Bat-Signal sabotage and file encryption
4. **Fear in the Narrows** — Chemical weapon attack causing mass panic
5. **The Iceberg Lounge Caper** — Illegal weapons deal ambush
6. **The Museum Mayhem** — Ancient artifact theft with forced entry

---

## 🚀 Getting Started

### Prerequisites

- Python 3.7 or higher
- `pip` (Python package installer)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd DeTechtive
```

2. Install required dependencies:

```bash
pip install -r requirements.txt
```

3. Install Graphviz (required for network visualization):

   **Windows:** Download from [graphviz.org](https://graphviz.org/download/) and add to PATH

   **macOS:**
   ```bash
   brew install graphviz
   ```

   **Linux:**
   ```bash
   sudo apt-get install graphviz
   ```

### Running the Application

Start the Streamlit server:

```bash
streamlit run main.py
```

The application will open in your browser at `http://localhost:8501`

---

## 📖 Usage

1. Select a mystery case from the dropdown menu
2. Review the case description and network structure
3. Collect evidence using the sidebar Evidence Log
4. Observe real-time probability updates
5. Identify the suspect with the highest posterior probability

---

## 🧠 How It Works

The application uses a **Naive Bayes Network** structure:

- The `GuiltyVillain` node represents the suspect
- Each clue node depends only on the guilty party
- Conditional probability tables define likelihoods
- Posterior probabilities are calculated using Bayes' theorem

---

## 🏗️ Project Structure

```
DeTechtive/
├── main.py                          # Main Streamlit application
├── README.md                        # Project documentation
├── requirements.txt                 # Python dependencies
├── data/
│   └── gotham_mysteries.json        # Case scenarios and probability data
├── supports/
│   ├── __init__.py
│   ├── batcomputer_logic.py         # Bayesian network construction logic
│   └── login_signup/                # Frontend login/signup interface
│       ├── src/
│       │   ├── components/          # Reusable UI components
│       │   ├── imports/             # Login and signup components
│       │   └── styles/              # CSS styling
│       ├── index.html
│       ├── vite.config.ts
│       └── package.json
└── others/                          # Additional resources
```

---

## 🛠️ Technical Details

### Dependencies

- `streamlit` — Web application framework
- `pgmpy` — Probabilistic graphical models
- `pandas` — Data analysis and manipulation
- `graphviz` — Network visualization

### Key Files

**main.py**
- Sets up the Streamlit UI
- Loads mystery scenarios
- Manages user interactions
- Displays inference results

**supports/batcomputer_logic.py**
- `create_mystery_model()` — Builds Bayesian networks dynamically
- `create_graphviz_plot()` — Generates network visualizations

**data/gotham_mysteries.json**
- Case titles and descriptions
- Suspect lists
- Clue definitions with conditional probabilities

---

## 🧮 Mathematical Foundation

Bayesian inference is based on **Bayes' Theorem**:

```
P(Suspect | Evidence) = (P(Evidence | Suspect) × P(Suspect)) / P(Evidence)
```

Where:

- `P(Suspect | Evidence)` is the posterior probability
- `P(Evidence | Suspect)` is the likelihood
- `P(Suspect)` is the prior probability
- `P(Evidence)` is the normalization constant

---

## 📊 Scenario Data Format

```json
{
  "scenario_id": {
    "title": "Case Title",
    "description": "Case description",
    "suspects": ["Suspect1", "Suspect2", "Suspect3"],
    "clues": {
      "ClueID": {
        "label": "Clue description",
        "probabilities": [0.9, 0.1, 0.5]
      }
    }
  }
}
```

---

## 🎨 Frontend (Login / Signup)

The project includes a React + TypeScript authentication interface.

### Frontend Stack

- React 18 with TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Running the Frontend

```bash
cd supports/login_signup
npm install
npm run dev
```

Development server: `http://localhost:5173`

---

## 🤝 Contributing

To add new mystery scenarios:

1. Edit `data/gotham_mysteries.json`
2. Follow the existing structure
3. Ensure probability arrays match the number of suspects
4. Use values between 0 and 1

---

## 🐛 Troubleshooting

**Graphviz visualization not working**
- Ensure Graphviz is installed and added to PATH

**JSON file not found**
- Verify `data/gotham_mysteries.json` exists

**Import errors**
- Run `pip install -r requirements.txt`

---

## 📝 License

This project is created for educational purposes to demonstrate Bayesian inference in an interactive and thematic context.

---

*"In the darkest night, probability illuminates the truth."*  
— The Batcomputer
