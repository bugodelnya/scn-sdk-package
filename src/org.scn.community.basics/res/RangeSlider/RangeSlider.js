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
 
 (function(){

var myComponentData = org_scn_community_require.knownComponents.basics.RangeSlider;

RangeSlider = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.attachChange(function() {
			var value = that.getValue();
			var value2 = that.getValue2();
			
			var updateRequired = false;
			if(that._SavedValue == undefined) {
				that._SavedValue = value;
				updateRequired = true;
			}
			
			if(that._SavedValue2 == undefined) {
				that._SavedValue2 = value2;
				updateRequired = true;
			}
			
			if(!updateRequired && (that._SavedValue != value || that._SavedValue2 != value2)) {
				updateRequired = true;
			}

			if(updateRequired) {
				that._SavedValue = value;
				that._SavedValue2 = value2;
				
				that.fireDesignStudioPropertiesChangedAndEvent(["value", "value2"], "onChange");
			}
		});
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
		if(that.getVertical() == true) {
			that.addStyleClass("scn-pack-RangeSlider-Vertical");
		} else {
			that.removeStyleClass("scn-pack-RangeSlider-Vertical");	
		}

		var liveChangeActive = that.getDLiveChangeActive();
		if(!that._liveEventCheck && liveChangeActive) {
			that.attachLiveChange(function(oControlEvent) {
				var value = oControlEvent.getParameters().value;
				var value2 = oControlEvent.getParameters().value2;
				
				var updateRequired = false;
				if(that._SavedLiveValue == undefined) {
					that._SavedLiveValue = value;
					updateRequired = true;
				}
				
				if(that._SavedLiveValue2 == undefined) {
					that._SavedLiveValue2 = value2;
					updateRequired = true;
				}
				
				if(!updateRequired && (that._SavedLiveValue != value || that._SavedLiveValue2 != value2)) {
					updateRequired = true;
				}
	
				if(updateRequired) {
					that._SavedLiveValue = value;
					that._SavedLiveValue2 = value2;
					
					that.setLiveValue(value);
					that.setLiveValue2(value2);
					
					that.fireDesignStudioPropertiesChangedAndEvent(["liveValue", "liveValue2"], "onLiveChange");
				}
			});
		}
		
		that._liveEventCheck = true;
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(basicsrangeslider){
	myComponentData.instance = RangeSlider;
	return myComponentData.instance;
});

}).call(this);