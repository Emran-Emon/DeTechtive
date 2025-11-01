import graphviz
from pgmpy.models import DiscreteBayesianNetwork
from pgmpy.factors.discrete import TabularCPD

def create_mystery_model(scenario_data):

    #Dynamically creates a Bayesian Network from a scenario dictionary.
    suspects = scenario_data['suspects']
    clues = scenario_data['clues']
    num_suspects = len(suspects)

    #Defining the network structure: GuiltyVillain -> each Clue
    model_structure = [('GuiltyVillain', clue_id) for clue_id in clues]
    model = DiscreteBayesianNetwork(model_structure)

    #Adding the prior probability for the main suspect node
    cpd_villain = TabularCPD(
        variable='GuiltyVillain',
        variable_card=num_suspects,
        values=[[1/num_suspects] for _ in suspects],
        state_names={'GuiltyVillain': suspects}
    )
    model.add_cpds(cpd_villain)

    #Adding the CPT for each clue based on the villain
    for clue_id, clue_info in clues.items():
        #The values list needs: [[P(False|S1), P(False|S2)...], [P(True|S1), P(True|S2)...]]
        true_probabilities = clue_info['probabilities']
        false_probabilities = [1 - p for p in true_probabilities]
        
        cpd_clue = TabularCPD(
            variable=clue_id,
            variable_card=2,
            values=[false_probabilities, true_probabilities],
            evidence=['GuiltyVillain'],
            evidence_card=[num_suspects],
            state_names={clue_id: [False, True],
                         'GuiltyVillain': suspects}
        )
        model.add_cpds(cpd_clue)
    
    #Finalizing and checking the model
    model.check_model()
    return model

def create_graphviz_plot(model):

    #Creates a graphviz Digraph object to visualize the BN structure.
    dot = graphviz.Digraph(comment='Bayesian Network Structure')
    dot.attr('node', shape='ellipse', style='filled', color='lightblue')
    dot.attr('edge', color='gray')
    
    #Adding nodes to the graph
    for node in model.nodes():
        dot.node(node, node)

    #Adding edges to the graph
    for edge in model.edges():
        dot.edge(edge[0], edge[1])

    return dot