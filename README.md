# 🦇 DeTechtive: The Batcomputer

A sophisticated mystery-solving application that uses Bayesian networks and probabilistic inference to solve fictional Gotham City crime scenarios. Built with Streamlit and powered by pgmpy, DeTechtive helps you identify the most likely culprit based on collected evidence.

## 📋 Overview

DeTechtive simulates detective work by applying Bayesian probability theory to crime scene investigation. Users can select from multiple mystery scenarios, collect evidence through an interactive interface, and watch as the system calculates the probability of guilt for each suspect in real-time.

The application features:
- **Dynamic Bayesian Network Construction**: Automatically builds probabilistic models from scenario data
- **Real-time Inference**: Updates suspect probabilities as new evidence is collected
- **Visual Network Graphs**: Displays the logical structure of each case
- **Multiple Mystery Scenarios**: Six unique Gotham City cases to solve
- **Interactive Evidence Collection**: Sidebar-based evidence logging system

## 🎯 Features

### Core Functionality
- **Probabilistic Reasoning**: Uses Variable Elimination algorithm for exact inference
- **Dynamic Case Loading**: All scenarios loaded from JSON configuration
- **Interactive UI**: Built with Streamlit for a seamless user experience
- **Visual Analytics**: Bar charts and formatted tables for probability analysis
- **Network Visualization**: Graphviz integration for Bayesian network structure display

### Available Cases
1. **The Gotham Bank Heist** - A chaotic but clever bank robbery
2. **The Arkham Asylum Breakout** - A suspicious escape during a riot
3. **The GCPD Sabotage** - Bat-Signal sabotage and file encryption
4. **Fear in the Narrows** - Chemical weapon attack causing mass panic
5. **The Iceberg Lounge Caper** - Illegal weapons deal ambush
6. **The Museum Mayhem** - Ancient artifact theft with forced entry

## 🚀 Getting Started

### Prerequisites
- Python 3.7 or higher
- pip (Python package installer)

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
   - **Windows**: Download from [graphviz.org](https://graphviz.org/download/) and add to PATH
   - **Mac**: `brew install graphviz`
   - **Linux**: `sudo apt-get install graphviz`

### Running the Application

Start the Streamlit server:
```bash
streamlit run main.py
```

The application will open in your default web browser at `http://localhost:8501`

## 📖 Usage

1. **Select a Case**: Choose a mystery from the dropdown menu
2. **Review Case Information**: Read the case description and examine the network structure
3. **Collect Evidence**: Check relevant clues in the sidebar Evidence Log
4. **Analyze Results**: Watch as suspect probabilities update in real-time
5. **Identify the Culprit**: The suspect with the highest probability is most likely guilty

### How It Works

The application uses a **Naive Bayes Network** structure where:
- The `GuiltyVillain` node represents the suspect
- Each clue is a child node dependent only on the guilty party
- Conditional probability tables define how likely each suspect would leave specific evidence
- The inference engine calculates posterior probabilities using Bayes' theorem

## 🏗️ Project Structure

```
DeTechtive/
├── main.py                          # Main Streamlit application
├── README.md                        # Project documentation
├── requirements.txt                 # Python dependencies
├── data/
│   └── gotham_mysteries.json       # Case scenarios and probability data
├── supports/
│   ├── __init__.py
│   ├── batcomputer_logic.py        # Bayesian network construction logic
│   └── login_signup/               # Frontend login/signup interface (React + TypeScript)
│       ├── src/
│       │   ├── components/         # Reusable UI components
│       │   ├── imports/            # Login and Signup components
│       │   └── styles/             # CSS styling
│       ├── index.html
│       ├── vite.config.ts
│       └── package.json
└── others/                          # Additional resources

```

## 🛠️ Technical Details

### Dependencies
- **streamlit**: Web application framework
- **pgmpy**: Probabilistic graphical models library
- **pandas**: Data manipulation and analysis
- **graphviz**: Network structure visualization

### Key Components

#### `main.py`
The main application file that:
- Sets up the Streamlit interface
- Loads mystery scenarios from JSON
- Manages user interactions
- Displays inference results

#### `supports/batcomputer_logic.py`
Core logic module containing:
- `create_mystery_model()`: Dynamically constructs Bayesian networks from scenario data
- `create_graphviz_plot()`: Generates visual representations of network structure

#### `data/gotham_mysteries.json`
Configuration file defining:
- Case titles and descriptions
- Suspect lists
- Clue definitions with conditional probabilities

### Bayesian Network Structure

Each mystery follows this structure:
```
        GuiltyVillain (Prior: uniform)
              /    |    \
             /     |     \
         Clue1  Clue2  Clue3  (Conditional on Guilty Party)
```

## 🎨 Frontend (Login/Signup Interface)

The project includes a modern React + TypeScript frontend for authentication:

### Frontend Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- Various UI components (buttons, forms, dialogs, etc.)

### Running the Frontend

Navigate to the login_signup directory:
```bash
cd supports/login_signup
npm install
npm run dev
```

The development server will start at `http://localhost:5173`

## 🧮 Mathematical Foundation

The system uses **Bayes' Theorem** for probabilistic inference:

$$P(Suspect|Evidence) = \frac{P(Evidence|Suspect) \times P(Suspect)}{P(Evidence)}$$

Where:
- $P(Suspect|Evidence)$ is the posterior probability (what we calculate)
- $P(Evidence|Suspect)$ is the likelihood (from the JSON data)
- $P(Suspect)$ is the prior probability (initially uniform)
- $P(Evidence)$ is the marginal probability (normalization constant)

## 📊 Data Format

Mystery scenarios are defined in JSON with this structure:
```json
{
  "scenario_id": {
    "title": "Case Title",
    "description": "Case description",
    "suspects": ["Suspect1", "Suspect2", "Suspect3"],
    "clues": {
      "ClueID": {
        "label": "Human-readable clue description",
        "probabilities": [0.9, 0.1, 0.5]  // P(Clue|each suspect)
      }
    }
  }
}
```

## 🤝 Contributing

Contributions are welcome! To add new mysteries:

1. Edit `data/gotham_mysteries.json`
2. Follow the existing JSON structure
3. Ensure probability arrays match the number of suspects
4. Probabilities should be between 0 and 1

## 📝 License

This project is created for educational purposes to demonstrate Bayesian inference in a fun, thematic context.

## 🙏 Acknowledgments

- Built with [Streamlit](https://streamlit.io/)
- Powered by [pgmpy](https://pgmpy.org/)
- Inspired by Batman and the Gotham City universe
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## 🐛 Troubleshooting

**Issue**: Graphviz visualization not working
- **Solution**: Ensure Graphviz is installed and added to system PATH

**Issue**: JSON file not found error
- **Solution**: Verify `data/gotham_mysteries.json` exists in the correct location

**Issue**: Module import errors
- **Solution**: Run `pip install -r requirements.txt` to install all dependencies

---

*"In the darkest night, probability illuminates the truth." - The Batcomputer*
