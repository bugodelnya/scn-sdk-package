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

	org_scn_community_require.knownComponents.basics.EmbeddedMedia.spec = 
{
  "tag": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "Tag",
      "options": [
        {
          "key": "embed",
          "text": "Tag 'embed'"
        },
        {
          "key": "object",
          "text": "Tag 'object'"
        }
      ],
      "tooltip": "Tag to Embedd",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "embed",
    "visible": true
  },
  "url": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Url",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Url to Embedd",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.basics.EmbeddedMedia.specInclude = 
{};

	org_scn_community_require.knownComponents.basics.EmbeddedMedia.specAbout = 
{
  "description": "Embedded Media - Include external media directly in your application",
  "icon": "EmbeddedMedia.png",
  "title": "Embedded Media 2.0",
  "topics": [
    {
      "content": "Includes external media directly in your application.",
      "title": "Embedded Media"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.EmbeddedMedia.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "div",
  "height": "400",
  "id": "EmbeddedMedia",
  "package": "basics",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Embedded Media 2.0",
  "tooltip": "Embedded Media - Include external media directly in your application",
  "width": "600"
};

})();// End of closure
