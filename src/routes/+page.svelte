<script>
    import FilePond, { registerPlugin } from "svelte-filepond";

    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
        FilePondPluginFileValidateType
    );

    let pond;
    let name = "filepond";
    function handleInit() {
        console.log("FilePond has initialised");
    }

    function handleAddFile(err, fileItem) {
        console.log("A file has been added", fileItem);
    }
</script>

<div class="app">
    <FilePond
        bind:this={pond}
        {name}
        server="?/upload"
        allowMultiple={true}
        oninit={handleInit}
        onaddfile={handleAddFile}
        acceptedFileTypes={["image/*", "video/*"]}
        labelIdle="Trascina o clicca qua per caricare i file"
        credits={false}
        allowRevert={false}
        allowRemove={false}
        allowReplace={false}
        allowProcess={false}
        dropValidation={true}
        dropOnPage={true}
        itemInsertLocation="after"
        labelFileLoading="Caricamento"
        labelFileProcessing="Caricamento"
        labelFileProcessingComplete="Caricamento completato"
        labelFileProcessingAborted="Caricamento annullato"
        labelFileProcessingError="Errore nel caricamento"
    />
</div>

<style global>
    @import "filepond/dist/filepond.css";
    @import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
    @import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";
    .app {
        width: 60%;
        margin: 0 auto;
        text-align: center;
    }
</style>
