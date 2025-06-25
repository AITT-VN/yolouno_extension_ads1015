Blockly.Blocks['ads1015_read'] = {
	init: function () {
		this.jsonInit({
			colour: "#4838f5",
			tooltip: "Đọc giá trị ADC thô (0 - 2047)",
			message0: "đọc ADC (raw) kênh %1",
			args0: [
				{
					"type": "field_dropdown",
					"name": "ads1015_channel",
					"options": [
						["0", "0"],
						["1", "1"],
						["2", "2"],
						["3", "3"]
					]
				}
			],
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python['ads1015_read'] = function (block) {
	var ch = block.getFieldValue('ads1015_channel');
	Blockly.Python.definitions_['import_ads1015'] = 'from ads1015 import *';
	var code = 'ads1015.read(channel1=' + ch + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['ads1015_read_volt'] = {
	init: function () {
		this.jsonInit({
			colour: "#4838f5",
			tooltip: "Đọc giá trị ADC (Volt)",
			message0: "đọc điện áp ADC kênh %1",
			args0: [
				{
					"type": "field_dropdown",
					"name": "ads1015_channel",
					"options": [
						["0", "0"],
						["1", "1"],
						["2", "2"],
						["3", "3"]
					]
				}
			],
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python['ads1015_read_volt'] = function (block) {
	var ch = block.getFieldValue('ads1015_channel');
	Blockly.Python.definitions_['import_ads1015'] = 'from ads1015 import *';
	var code = 'ads1015.raw_to_v(channel1=' + ch + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};
