from pgmpy.models import DiscreteBayesianNetwork
from pgmpy.factors.discrete import TabularCPD

def build_phase1_network():
    """
    Builds and returns the Bayesian Network for the
    "Gotham Bank Heist" scenario.
    """
    
    villains = ['The Joker', 'The Riddler', 'The Penguin', 'Catwoman']
    
    #Defining the Network Structure
    model = DiscreteBayesianNetwork([
        ('GuiltyVillain', 'RiddleLeftAtScene'),
        ('GuiltyVillain', 'CrimeIsChaotic'),
        ('GuiltyVillain', 'TheatricalHeist')
    ])

    #Defining the Conditional Probability Tables (CPTs)

    # P(GuiltyVillain) - The Prior Probability
    cpd_villain = TabularCPD(
        variable='GuiltyVillain',
        variable_card=4,
        values=[[0.25], [0.25], [0.25], [0.25]],
        state_names={'GuiltyVillain': villains}
    )

    # P(RiddleLeftAtScene | GuiltyVillain)
    cpd_riddle = TabularCPD(
        variable='RiddleLeftAtScene',
        variable_card=2,
        values=[
            [0.90, 0.05, 0.99, 0.99],  # P(Riddle=False | Villain)
            [0.10, 0.95, 0.01, 0.01]   # P(Riddle=True  | Villain)
        ],
        evidence=['GuiltyVillain'],
        evidence_card=[4],
        state_names={'RiddleLeftAtScene': [False, True],
                     'GuiltyVillain': villains}
    )

    # P(CrimeIsChaotic | GuiltyVillain)
    cpd_chaos = TabularCPD(
        variable='CrimeIsChaotic',
        variable_card=2,
        values=[
            [0.10, 0.80, 0.70, 0.90],  # P(Chaos=False | Villain)
            [0.90, 0.20, 0.30, 0.10]   # P(Chaos=True  | Villain)
        ],
        evidence=['GuiltyVillain'],
        evidence_card=[4],
        state_names={'CrimeIsChaotic': [False, True],
                     'GuiltyVillain': villains}
    )

    # P(TheatricalHeist | GuiltyVillain)
    cpd_theatrical = TabularCPD(
        variable='TheatricalHeist',
        variable_card=2,
        values=[
            [0.40, 0.50, 0.10, 0.20],  # P(Theatrical=False | Villain)
            [0.60, 0.50, 0.90, 0.80]   # P(Theatrical=True  | Villain)
        ],
        evidence=['GuiltyVillain'],
        evidence_card=[4],
        state_names={'TheatricalHeist': [False, True],
                     'GuiltyVillain': villains}
    )

    #Adding the CPTs to the Model
    model.add_cpds(cpd_villain, cpd_riddle, cpd_chaos, cpd_theatrical)

    #Checking if the model is valid
    if not model.check_model():
        #This will stop the program if the probabilities don't add up
        raise ValueError("Model is invalid. Check CPTs.")

    print("Model built successfully!")
    return model