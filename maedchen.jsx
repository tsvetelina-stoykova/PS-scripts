function main() {
   
    app.displayDialogs = DialogModes.NO;
    var newFolder = new Folder(activeDocument.path + '/tif');
    if (!newFolder.exists){
        newFolder.create();
    }
    
    // try{
    //     activeDocument.mergeVisibleLayers();
    //     }catch(e){}
    //     app.displayDialogs = DialogModes.NO;
    // if (!documents.length) return;
//Reset Custom Options.  
//app.eraseCustomOptions( 'a7ba92a0-d6f8-11df-937b-0800200c9a66' ); return;  
    try {
        var Name = decodeURI(activeDocument.name).replace(/\.[^\.]+$/, '');
        var Path = decodeURI(activeDocument.path + '/tif');
        var saveFile = File(Path + "/" + Name + ".tif")
        // var saveFile = File(Path + "/" + Name)
        SaveTif(saveFile, 12);
        // $.writeln(saveFile);
    } catch (e) {
        alert(e + "\r@ Line " + e.line);
    }
}

function SaveTif(saveFile, tiffSaveOptions) {
    var doc = activeDocument;
    tiffSaveOptions = new TiffSaveOptions();  

    tiffSaveOptions.embedColorProfile = true;  

    tiffSaveOptions.alphaChannels = true;  

    tiffSaveOptions.layers = true;
    // jpgSaveOptions = new JPEGSaveOptions();
    // jpgSaveOptions.embedColorProfile = true;
    // jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    // jpgSaveOptions.matte = MatteType.NONE;
    // jpgSaveOptions.quality = jpegQuality;
    
    
    // activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.UPPERCASE);
    activeDocument.saveAs(saveFile, tiffSaveOptions, true, Extension.LOWERCASE);
}
    // //Set the value to false to prevent the dialog from showing.
    // app.linkingPreferences.checkLinksAtOpen = false;
main();


app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); 