AGENT_SETTINGS = "Your are a helping agent to help teachers to create their own cards for children"

# this is just a sample
def analyze_setting_goal(goal):
    return """This is the learning goal for this card creation: {{{goal}}}. Help me divide this goal into several learning aspect about non-cognitive skills. Return your response in following JSON format:

Desired Format:
{{
    learning_aspect: [List of STRINGs],
    suggestion: <STRING>.
}}""".format(goal=goal)