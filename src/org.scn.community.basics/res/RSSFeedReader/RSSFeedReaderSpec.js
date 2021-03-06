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

	org_scn_community_require.knownComponents.basics.RSSFeedReader.spec = 
{
  "feedUrl": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-RSS",
      "desc": "RSS Feed URL",
      "noAps": false,
      "noZtl": false,
      "tooltip": "RSS Feed URL",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "Url",
    "value": "http://cdn.eex.com/rss/de/market.rss",
    "visible": true
  },
  "useBuildInXsl": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Xsl",
      "desc": "Use Build-In Xsl File",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Use Build-In Xsl File",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "true",
    "visible": true
  },
  "xslUrl": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Xsl",
      "desc": "XSL URL",
      "noAps": false,
      "noZtl": false,
      "tooltip": "XSL URL",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "Url",
    "value": "",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.basics.RSSFeedReader.specInclude = 
{};

	org_scn_community_require.knownComponents.basics.RSSFeedReader.specAbout = 
{
  "description": "RSSFeedReader",
  "icon": "RSSFeedReader.png",
  "title": "RSSFeedReader 2.0",
  "topics": [
    {
      "content": "RSSFeedReader",
      "title": "RSSFeedReader"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.RSSFeedReader.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "div",
  "height": "200",
  "id": "RSSFeedReader",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "RSSFeedReader 2.0",
  "tooltip": "RSSFeedReader",
  "width": "300"
};

})();// End of closure
