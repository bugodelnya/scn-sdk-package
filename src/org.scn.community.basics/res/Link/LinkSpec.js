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

	org_scn_community_require.knownComponents.basics.Link.spec = 
{
  "onPress": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "On Press",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Fires The Event When The User Clicks The Control."
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "text": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Link Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Link Text To Be Displayed..",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "Go Sap...",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.basics.Link.specInclude = 
{};

	org_scn_community_require.knownComponents.basics.Link.specAbout = 
{
  "description": "Link",
  "icon": "Link.png",
  "title": "Link 2.0",
  "topics": [
    {
      "content": "Link",
      "title": "Link"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.Link.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "20",
  "id": "Link",
  "package": "basics",
  "parentControl": "sap.ui.commons.Link",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Link 2.0",
  "tooltip": "Link",
  "width": "100"
};

})();// End of closure
