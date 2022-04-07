1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
//=============================================================================
// Yanfly Engine Plugins - Base Troop Events
// YEP_BaseTroopEvents.js
//=============================================================================
 
var Imported = Imported || {};
Imported.YEP_BaseTroopEvents = true;
 
var Yanfly = Yanfly || {};
Yanfly.BTE = Yanfly.BTE || {};
Yanfly.BTE.version = 1.01
 
//=============================================================================
/*:
 * @plugindesc v1.01 Enabling this plugin will cause all troops to have
 * events occur in every fight.
 * @author Yanfly Engine Plugins
 *
 * @param Base Troop ID
 * @type troop
 * @desc Change this value to the Troop ID you want all of the recurring
 * troop events to draw from.
 * @default 1
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * For all the eventers out there who love to customize their battles through
 * custom event pages, you can now save yourself some time by drawing all the
 * event pages from a base troop event to occur in every fight. All of the
 * events will be present in every single battle.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================
 
//=============================================================================
// Parameter Variables
//=============================================================================
 
Yanfly.Parameters = PluginManager.parameters('YEP_BaseTroopEvents');
Yanfly.Param = Yanfly.Param || {};
 
Yanfly.Param.BaseTroopID = Number(Yanfly.Parameters['Base Troop ID']);
 
//=============================================================================
// DataManager
//=============================================================================
 
Yanfly.BTE.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.BTE.DataManager_isDatabaseLoaded.call(this)) return false;
        this.processBTEPages();
        return true;
};
 
DataManager.processBTEPages = function() {
    for (var n = 1; n < $dataTroops.length; n++) {
        var base_troop = $dataTroops[Yanfly.Param.BaseTroopID];
        var troop = $dataTroops[n];
        if (n !== Yanfly.Param.BaseTroopID && Yanfly.Param.BaseTroopID > 0) {
      if (troop._baseTroopEventsMade) continue;
      Yanfly.Util.extend(troop.pages, base_troop.pages);
      troop._baseTroopEventsMade = true;
        }
    }
};
 
//=============================================================================
// New Function
//=============================================================================
 
Yanfly.Util = Yanfly.Util || {};
 
Yanfly.Util.extend = function (mainArray, otherArray) {
    otherArray.forEach(function(i) {
      mainArray.push(i)
    }, this);
}
 
//=============================================================================
// End of File
//=============================================================================