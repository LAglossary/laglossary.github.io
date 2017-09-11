# Learning Analytics Glossary from the AFEL Project

This is the repository containing the code and base material to generate the page at https://laglossary.github.io/

The aim and purpose of this glossary is to facilitate understanding between researchers and practicionners working in Learning Analytics, especially from a social, self-directed learning point of view. It was originated within the [http://afel-project.eu](AFEL project) but is being developped further as a collaborative resource here. Therefore, we use this space to define key terms that are important for research and development within AFEL and the broader learning analytics community. Community menbers are invited to participate in enlarging and improving the glossary. Ideally, it will build a bridge from abstract psychological concepts to concrete data science scripts and procedure for studying and operationalizing these constructs. Potential entries, as well as issues and comments can be proposed through this repository. You can clone and push back patches for the project, or request to become a contributor.


## HOW to contribute 

You can contribute by editing a concept file or adding a new one. All concepts file are located in the [XXX | concepts folder] and need to be listed, under the relevant category, in the concept_list.json file.

The basic template for describing concepts is described in the template.json file as below:

{
    "title": "The label/title of the concept",
    "overview": 'Basic description in lay-terms',
    "theory": 'Description of the theoretical background for the concept',
    "formalisation": 'Formal definition of the concept if available',
    "operationalisation": 'Description of the operationalisation of the concept, in code or algorithm'
}

In this template, the title and overview attributes are mandatory, and the other attributes are optional (but highly encouraged). Images and other resources required for the rendering of a concept should be places under the relevant sub-folder of the assets folder.
