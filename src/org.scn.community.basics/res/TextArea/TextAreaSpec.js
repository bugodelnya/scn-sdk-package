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

	org_scn_community_require.knownComponents.basics.TextArea.spec = 
{
  "editable": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Editable",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Editable",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "enabled": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Enabled",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Enabled",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "maxLength": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Maximal Length",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Teh Maximal Length In Characters",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": true
  },
  "onValueChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Value Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Value Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "value": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Text Value",
      "noAps": false,
      "noZtl": false,
      "tooltip": "The Text Content Of This Text Area",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.basics.TextArea.specInclude = 
{};

	org_scn_community_require.knownComponents.basics.TextArea.specAbout = 
{
  "description": "Text Area",
  "icon": "TextArea.png",
  "title": "Text Area 2.0",
  "topics": [
    {
      "content": "Text Area",
      "title": "Text Area"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.TextArea.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "400",
  "id": "TextArea",
  "package": "basics",
  "parentControl": "sap.ui.commons.TextArea",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Text Area 2.0",
  "tooltip": "Text Area",
  "width": "230"
};

})();// End of closure
