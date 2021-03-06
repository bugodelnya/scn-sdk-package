ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "300",
  "id": "Calendar",
  "package": "basics",
  "parentControl": "sap.me.Calendar",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "dateformatter",
      "space": "known"
    },
    {
      "id": "sap_m_loader",
      "space": "known"
    }
  ],
  "title": "Calendar 2.0",
  "tooltip": "Calendar",
  "width": "300"
},

"spec" : 
{
  "DCurrentValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Current Date Value YYYYMMDD",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Current Date Value YYYYMMDD",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "TODAY",
    "visible": true
  },
  "DSelectionType": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Interaction",
      "choiceType": "SelectionType",
      "desc": "Selection Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Single",
          "text": "Single Selection"
        },
        {
          "key": "Range",
          "text": "Range Selection"
        }
      ],
      "tooltip": "Selection Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Single",
    "visible": true
  },
  "DValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Date Single Value YYYYMMDD",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Date Single Value YYYYMMDD",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "TODAY",
    "visible": true
  },
  "DValueF": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Date Value Range From YYYYMMDD",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Date Value Range From YYYYMMDD",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "TODAY",
    "visible": true
  },
  "DValueT": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Value",
      "desc": "Date Value Range To YYYYMMDD",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Date Value Range To YYYYMMDD",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "TODAY",
    "visible": true
  },
  "firstDayOffset": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "First Day Offset (0 == Sunday)",
      "noAps": false,
      "noZtl": false,
      "tooltip": "First Day Offset (0 == Sunday, 1 == Monday)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "monthsPerRow": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "Months Per Row",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Months Per Row",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "monthsToDisplay": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "Months To Display",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Months  ToDisplay",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  },
  "onCurrentChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Current Value Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Current Value Changed"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onRangeChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Value Change With Date Range",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Value Change With Date Range"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onSingleChanged": {
    "opts": {
      "apsControl": "text",
      "cat": "Events",
      "desc": "Event For On Value Change With Single Date",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event For On Value Change With Single Date"
    },
    "template": "Event",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "singleRow": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Visualization",
      "desc": "Single Row",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Single Row",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": "false",
    "visible": true
  },
  "weeksPerRow": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Visualization",
      "desc": "Weeks Per Row",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Weeks Per Row",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": "1",
    "visible": true
  }
}, 

"specInclude" : 
{}, 

"specAbout" : 
{
  "description": "Calendar",
  "icon": "Calendar.png",
  "title": "Calendar 2.0",
  "topics": [
    {
      "content": "Calendar",
      "title": "Calendar"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};