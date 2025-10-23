from pgmpy.inference import VariableElimination
from supports.batcomputer_logic import build_phase1_network

def run_investigation():
    """
    Main function to run the command-line solver.
    """
    print("Initializing Batcomputer...")
    
    # 1. Build the model by calling the function from our other file
    try:
        model = build_phase1_network()
    except Exception as e:
        print(f"\n--- ERROR: Could not build model: {e} ---")
        return

    # 2. Create the inference engine
    inference = VariableElimination(model)

    # --- 3. Run Test Scenarios ---

    # SCENARIO 1: No Evidence
    print("\n--- CASE 1: No Evidence (Prior Probabilities) ---")
    prior_result = inference.query(variables=['GuiltyVillain'])
    print(prior_result)

    # SCENARIO 2: A Riddle was Found
    # pgmpy uses 0 for False and 1 for True
    evidence_1 = {'RiddleLeftAtScene': 1}
    print(f"\n--- CASE 2: Evidence is {evidence_1} ---")
    posterior_result_1 = inference.query(
        variables=['GuiltyVillain'],
        evidence=evidence_1
    )
    print(posterior_result_1)

    # SCENARIO 3: A Riddle was Found AND the crime was Theatrical
    evidence_2 = {'RiddleLeftAtScene': 1, 'TheatricalHeist': 1}
    print(f"\n--- CASE 3: Evidence is {evidence_2} ---")
    posterior_result_2 = inference.query(
        variables=['GuiltyVillain'],
        evidence=evidence_2
    )
    print(posterior_result_2)

# This makes the script runnable
if __name__ == "__main__":
    run_investigation()