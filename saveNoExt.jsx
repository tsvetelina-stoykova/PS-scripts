function main() {
   
    app.displayDialogs = DialogModes.NO;
    var newFolder = new Folder(activeDocument.path + '/JPG');
    if (!newFolder.exists){
        newFolder.create();
    }
    
    try{
        activeDocument.mergeVisibleLayers();
        }catch(e){}
        app.displayDialogs = DialogModes.NO;
    // if (!documents.length) return;
//Reset Custom Options.  
//app.eraseCustomOptions( 'a7ba92a0-d6f8-11df-937b-0800200c9a66' ); return;  
    try {
        var Name = decodeURI(activeDocument.name).replace(/\.[^\.]+$/, '');
        var Path = decodeURI(activeDocument.path + '/JPG');
        // var saveFile = File(Path + "/" + Name + ".JPG")
        var saveFile = File(Path + "/" + Name)
        SaveJPEG(saveFile, 12);
        // $.writeln(saveFile);
    } catch (e) {
        alert(e + "\r@ Line " + e.line);
    }
}

function SaveJPEG(saveFile, jpegQuality) {
    var doc = activeDocument;
    if (doc.bitsPerChannel != BitsPerChannelType.EIGHT) doc.bitsPerChannel = BitsPerChannelType.EIGHT;
    jpgSaveOptions = new JPEGSaveOptions();
    jpgSaveOptions.embedColorProfile = true;
    jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpgSaveOptions.matte = MatteType.NONE;
    jpgSaveOptions.quality = jpegQuality;
    
    
    // activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.UPPERCASE);
    activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.NONE);
}
    // //Set the value to false to prevent the dialog from showing.
    // app.linkingPreferences.checkLinksAtOpen = false;
main();


app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); 