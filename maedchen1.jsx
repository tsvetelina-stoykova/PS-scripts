var doc = activeDocument;

var docPath = activeDocument.path.fullName;

var docName = doc.name;

var saveName2 = new File(docPath+"/EDIT" + docName + '.tif');

tiffSaveOptions = new TiffSaveOptions();  

tiffSaveOptions.embedColorProfile = true;  

tiffSaveOptions.alphaChannels = true;  

tiffSaveOptions.layers = true;

var folder1 = Folder(docPath  + "/EDIT"); //Check if it exist, if not create it.

if(!folder1.exists) folder1.create();


app.activeDocument.saveAs(SaveName2, tiffSaveOptions, true, Extension.LOWERCASE);
