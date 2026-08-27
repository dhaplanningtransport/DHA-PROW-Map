var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoLight_1 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Kent_2 = new ol.format.GeoJSON();
var features_Kent_2 = format_Kent_2.readFeatures(json_Kent_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kent_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kent_2.addFeatures(features_Kent_2);
var lyr_Kent_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kent_2, 
                style: style_Kent_2,
                popuplayertitle: 'Kent',
                interactive: false,
    title: 'Kent<br />\
    <img src="styles/legend/Kent_2_0.png" /> Byway open to all traffic<br />\
    <img src="styles/legend/Kent_2_1.png" /> Public Bridleway<br />\
    <img src="styles/legend/Kent_2_2.png" /> Public Footpath<br />\
    <img src="styles/legend/Kent_2_3.png" /> Restricted Byway<br />' });
var format_Medway_3 = new ol.format.GeoJSON();
var features_Medway_3 = format_Medway_3.readFeatures(json_Medway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medway_3.addFeatures(features_Medway_3);
var lyr_Medway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Medway_3, 
                style: style_Medway_3,
                popuplayertitle: 'Medway',
                interactive: false,
    title: 'Medway<br />\
    <img src="styles/legend/Medway_3_0.png" /> Bridleway<br />\
    <img src="styles/legend/Medway_3_1.png" /> Byway<br />\
    <img src="styles/legend/Medway_3_2.png" /> Footpath<br />\
    <img src="styles/legend/Medway_3_3.png" /> Restricted Byway<br />' });
var group_PublicRightofWay = new ol.layer.Group({
                                layers: [lyr_Kent_2,lyr_Medway_3,],
                                fold: 'open',
                                title: 'Public Right of Way'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_CartoLight_1.setVisible(true);lyr_Kent_2.setVisible(true);lyr_Medway_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_CartoLight_1,group_PublicRightofWay];
lyr_Kent_2.set('fieldAliases', {'StatusDesc': 'StatusDesc', 'PathNo': 'Route No.', });
lyr_Medway_3.set('fieldAliases', {'PROW_ID': 'Route No.', 'TYPE': 'TYPE', });
lyr_Kent_2.set('fieldImages', {'StatusDesc': 'Hidden', 'PathNo': 'TextEdit', });
lyr_Medway_3.set('fieldImages', {'PROW_ID': 'TextEdit', 'TYPE': 'Hidden', });
lyr_Kent_2.set('fieldLabels', {'PathNo': 'header label - visible with data', });
lyr_Medway_3.set('fieldLabels', {'PROW_ID': 'inline label - visible with data', });
lyr_Medway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});