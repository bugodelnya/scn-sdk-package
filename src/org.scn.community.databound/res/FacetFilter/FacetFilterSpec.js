/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */

(function() {

	org_scn_community_require.knownComponents.databound.FacetFilter.spec = 
{
  "DClearOthers": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Clear Selections if 0",
      "tooltip": "Clear Selection of other dimensions when member value is 0",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DContentMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Special",
      "choiceType": "DimensionSet",
      "desc": "Content Mode",
      "options": [
        {
          "key": "All",
          "text": "All Dimensions"
        },
        {
          "key": "Resultset",
          "text": "Only from Result Set"
        },
        {
          "key": "Custom",
          "text": "Custom Dimension Set"
        }
      ],
      "tooltip": "Content Mode (how much should be visualized)",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Resultset",
    "visible": true
  },
  "DCustomDimensions": {
    "opts": {
      "apsControl": "array",
      "arrayMode": "StringArray",
      "cat": "Special",
      "desc": "Custom Dimensions",
      "tooltip": "List of Custom Dimensions",
      "ztlFunction": "",
      "ztlType": "StringArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DDisplayText": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "MemberDisplay",
      "desc": "Display Text",
      "options": [
        {
          "key": "Text",
          "text": "Text Only"
        },
        {
          "key": "Text_Value",
          "text": "Text Value"
        },
        {
          "key": "Text_Count",
          "text": "Text Count"
        }
      ],
      "tooltip": "Display Text",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Text",
    "visible": true
  },
  "DElements": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Master Data Elements",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Master Data Elements",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "DFacetWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Facet Width in px",
      "tooltip": "Facet Width in px",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 160,
    "visible": true
  },
  "DMaxDisplayMembers": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Maximum Number of Members",
      "tooltip": "Maximum Number of Members",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 5,
    "visible": true
  },
  "DMaxMembers": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Data",
      "desc": "Maximum Number of Members",
      "tooltip": "Maximum Number of Members",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 1000,
    "visible": true
  },
  "DSecondValueContent": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Second Value",
      "choiceType": "SecondValueContent",
      "desc": "Second Value Content",
      "options": [
        {
          "key": "Value",
          "text": "Value"
        },
        {
          "key": "Key",
          "text": "Key"
        },
        {
          "key": "Count",
          "text": "Count"
        }
      ],
      "tooltip": "Second Value Content",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Value",
    "visible": true
  },
  "DSelection": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Selected Elements",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Selected Elements",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "DShowSecondValue": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Second Value",
      "desc": "Show Second Value",
      "tooltip": "Shows Second Value with Selected Content",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DSortingDirection": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "SortDirection",
      "desc": "Member Sorting Direction",
      "options": [
        {
          "key": "Ascending",
          "text": "Ascending"
        },
        {
          "key": "Descending",
          "text": "Descending"
        }
      ],
      "tooltip": "Member Sorting Direction",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Ascending",
    "visible": true
  },
  "DSortingType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "SortType",
      "desc": "Member Sorting Type",
      "options": [
        {
          "key": "Default",
          "text": "Default"
        },
        {
          "key": "Alphabetical",
          "text": "Alphabetical"
        },
        {
          "key": "Default",
          "text": "Default"
        },
        {
          "key": "Selected",
          "text": "Selected"
        },
        {
          "key": "Value",
          "text": "Value"
        },
        {
          "key": "Count",
          "text": "Count"
        }
      ],
      "tooltip": "Member Sorting Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Default",
    "visible": true
  },
  "DZeroValuesMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Zero Values Display Mode",
      "options": [
        {
          "key": "Show",
          "text": "Show Members in the List"
        },
        {
          "key": "Hide",
          "text": "Hide Members"
        }
      ],
      "tooltip": "Display Mode for Members with Zero Values",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Show",
    "visible": true
  },
  "data": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Data List",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultCellList",
    "value": "null",
    "visible": true
  },
  "onBeforeRender": {
    "opts": {
      "cat": "Events",
      "desc": "On Before Render",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Before Render"
    },
    "type": "ScriptText",
    "value": "",
    "visible": false
  },
  "onInternalSelectionChanged": {
    "opts": {
      "cat": "Events",
      "desc": "On List Selection",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on List Selection"
    },
    "type": "ScriptText",
    "value": "this.private_onSelectionChanged();",
    "visible": false
  }
};

	org_scn_community_require.knownComponents.databound.FacetFilter.specInclude = 
{};

	org_scn_community_require.knownComponents.databound.FacetFilter.specAbout = 
{
  "description": "Facet Filter - A simple filter which is using the facet techniques",
  "icon": "FacetFilter.png",
  "title": "Facet Filter 2.0",
  "topics": [
    {
      "content": "The component is grouping the members of dimensions which are in result set, placing the counter and sorting them",
      "title": "Facet Filter"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.databound.FacetFilter.specComp = 
{
  "databound": true,
  "extension": "DataComponent",
  "group": "ScnCommunityDataBound",
  "handlerType": "sapui5",
  "height": "400",
  "id": "FacetFilter",
  "package": "databound",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "common_databound",
      "space": "known"
    },
    {
      "id": "jshashtable",
      "space": "known"
    },
    {
      "id": "numberformatter",
      "space": "known"
    }
  ],
  "title": "Facet Filter 2.0",
  "tooltip": "FacetFilter - A simple selector which is using the facet techniques",
  "width": "800"
};

})();// End of closure
