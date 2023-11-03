// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//     </head>
//     <body>
//         <style>
//             #container {
//                 width: 1000px;
//                 margin: 20px auto;
//             }
//             .ck-editor__editable[role="textbox"] {
//                 /* editing area */
//                 min-height: 200px;
//             }
//             .ck-content .image {
//                 /* block images */
//                 max-width: 80%;
//                 margin: 20px auto;
//             }
//         </style>
//         <div id="container">
//             <div id="editor">
//             </div>
//         </div>
//         <!--
//             The "super-build" of CKEditor&nbsp;5 served via CDN contains a large set of plugins and multiple editor types.
//             See https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html#running-a-full-featured-editor-from-cdn
//         -->
//         <script src="https://cdn.ckeditor.com/ckeditor5/40.0.0/super-build/ckeditor.js"></script>
//         <!--
//             Uncomment to load the Spanish translation
//             <script src="https://cdn.ckeditor.com/ckeditor5/40.0.0/super-build/translations/es.js"></script>
//         -->
//         <script>
//             // This sample still does not showcase all CKEditor&nbsp;5 features (!)
//             // Visit https://ckeditor.com/docs/ckeditor5/latest/features/index.html to browse all the features.
//             CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html#extended-toolbar-configuration-format
//                 toolbar: {
//                     items: [
//                         'exportPDF','exportWord', '|',
//                         'findAndReplace', 'selectAll', '|',
//                         'heading', '|',
//                         'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat', '|',
//                         'bulletedList', 'numberedList', 'todoList', '|',
//                         'outdent', 'indent', '|',
//                         'undo', 'redo',
//                         '-',
//                         'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
//                         'alignment', '|',
//                         'link', 'insertImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock', 'htmlEmbed', '|',
//                         'specialCharacters', 'horizontalLine', 'pageBreak', '|',
//                         'textPartLanguage', '|',
//                         'sourceEditing'
//                     ],
//                     shouldNotGroupWhenFull: true
//                 },
//                 // Changing the language of the interface requires loading the language file using the <script> tag.
//                 // language: 'es',
//                 list: {
//                     properties: {
//                         styles: true,
//                         startIndex: true,
//                         reversed: true
//                     }
//                 },
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
//                 heading: {
//                     options: [
//                         { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//                         { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
//                         { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
//                         { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
//                         { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
//                         { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
//                         { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
//                     ]
//                 },
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration
//                 placeholder: 'Welcome to CKEditor&nbsp;5!',
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-family-feature
//                 fontFamily: {
//                     options: [
//                         'default',
//                         'Arial, Helvetica, sans-serif',
//                         'Courier New, Courier, monospace',
//                         'Georgia, serif',
//                         'Lucida Sans Unicode, Lucida Grande, sans-serif',
//                         'Tahoma, Geneva, sans-serif',
//                         'Times New Roman, Times, serif',
//                         'Trebuchet MS, Helvetica, sans-serif',
//                         'Verdana, Geneva, sans-serif'
//                     ],
//                     supportAllValues: true
//                 },
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-size-feature
//                 fontSize: {
//                     options: [ 10, 12, 14, 'default', 18, 20, 22 ],
//                     supportAllValues: true
//                 },
//                 // Be careful with the setting below. It instructs CKEditor to accept ALL HTML markup.
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#enabling-all-html-features
//                 htmlSupport: {
//                     allow: [
//                         {
//                             name: /.*/,
//                             attributes: true,
//                             classes: true,
//                             styles: true
//                         }
//                     ]
//                 },
//                 // Be careful with enabling previews
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/html-embed.html#content-previews
//                 htmlEmbed: {
//                     showPreviews: true
//                 },
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/link.html#custom-link-attributes-decorators
//                 link: {
//                     decorators: {
//                         addTargetToExternalLinks: true,
//                         defaultProtocol: 'https://',
//                         toggleDownloadable: {
//                             mode: 'manual',
//                             label: 'Downloadable',
//                             attributes: {
//                                 download: 'file'
//                             }
//                         }
//                     }
//                 },
//                 // https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#configuration
//                 mention: {
//                     feeds: [
//                         {
//                             marker: '@',
//                             feed: [
//                                 '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
//                                 '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
//                                 '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
//                                 '@sugar', '@sweet', '@topping', '@wafer'
//                             ],
//                             minimumCharacters: 1
//                         }
//                     ]
//                 },
//                 // The "super-build" contains more premium features that require additional configuration, disable them below.
//                 // Do not turn them on unless you read the documentation and know how to configure them and setup the editor.
//                 removePlugins: [
//                     // These two are commercial, but you can try them out without registering to a trial.
//                     // 'ExportPdf',
//                     // 'ExportWord',
//                     'CKBox',
//                     'CKFinder',
//                     'EasyImage',
//                     // This sample uses the Base64UploadAdapter to handle image uploads as it requires no configuration.
//                     // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/base64-upload-adapter.html
//                     // Storing images as Base64 is usually a very bad idea.
//                     // Replace it on production website with other solutions:
//                     // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html
//                     // 'Base64UploadAdapter',
//                     'RealTimeCollaborativeComments',
//                     'RealTimeCollaborativeTrackChanges',
//                     'RealTimeCollaborativeRevisionHistory',
//                     'PresenceList',
//                     'Comments',
//                     'TrackChanges',
//                     'TrackChangesData',
//                     'RevisionHistory',
//                     'Pagination',
//                     'WProofreader',
//                     // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
//                     // from a local file system (file://) - load this site via HTTP server if you enable MathType.
//                     'MathType',
//                     // The following features are part of the Productivity Pack and require additional license.
//                     'SlashCommand',
//                     'Template',
//                     'DocumentOutline',
//                     'FormatPainter',
//                     'TableOfContents',
//                     'PasteFromOfficeEnhanced'
//                 ]
//             });
//         </script>
//     </body>
// </html>



// import React, { useEffect } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import './ckeditors.css';

// const Index = () => {
//     useEffect(() => {
//         CKEditor
//             .create(document.getElementById("editor"), {
//                 toolbar: {
//                     items: [
//                         'exportPdf', 'exportWord', '|',
//                         'findAndReplace', 'selectAll', '|',
//                         'heading', '|',
//                         'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat', '|',
//                         'bulletedList', 'numberedList', 'todoList', '|',
//                         'outdent', 'indent', '|',
//                         'undo', 'redo',
//                         '-',
//                         'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
//                         'alignment', '|',
//                         'link', 'insertImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock', 'htmlEmbed', '|',
//                         'specialCharacters', 'horizontalLine', 'pageBreak', '|',
//                         'textPartLanguage', '|',
//                         'sourceEditing'
//                     ],
//                     shouldNotGroupWhenFull: true
//                 },
//                 placeholder: 'Welcome to CKEditor 5!',
//                 fontFamily: {
//                     options: [
//                         'default',
//                         'Arial, Helvetica, sans-serif',
//                         'Courier New, Courier, monospace',
//                         'Georgia, serif',
//                         'Lucida Sans Unicode, Lucida Grande, sans-serif',
//                         'Tahoma, Geneva, sans-serif',
//                         'Times New Roman, Times, serif',
//                         'Trebuchet MS, Helvetica, sans-serif',
//                         'Verdana, Geneva, sans-serif'
//                     ],
//                     supportAllValues: true
//                 },
//                 fontSize: {
//                     options: [10, 12, 14, 'default', 18, 20, 22],
//                     supportAllValues: true
//                 },
//                 htmlSupport: {
//                     allow: [
//                         {
//                             name: /.*/,
//                             attributes: true,
//                             classes: true,
//                             styles: true
//                         }
//                     ]
//                 },
//                 htmlEmbed: {
//                     showPreviews: true
//                 },
//                 link: {
//                     decorators: {
//                         addTargetToExternalLinks: true,
//                         defaultProtocol: 'https://',
//                         toggleDownloadable: {
//                             mode: 'manual',
//                             label: 'Downloadable',
//                             attributes: {
//                                 download: 'file'
//                             }
//                         }
//                     }
//                 },
//             })
//             .then(editor => {
//                 // Handle editor initialization
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }, []);

//     return (
//         <div id="container">
//             <div id="editor">
//             </div>
//         </div>
//     );
// }

// export default Index;


// import React, { useState } from 'react';
// import { Grid } from '@mui/material';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const CKTextEditor = ({ editorLabelText = '', payloadText = '' }) => {
//     const payload = {
//         name: '',
//         desc: `
//         <p></p>
//         <p className="editor-text">${payloadText}</p>
//         <p></p>
//         `,
//         isDefault: '',
//         isSystem: '',
//     }
//     const [errPayload, setErrPayload] = useState({});
//     const [details, setDetails] = useState(payload);

//     // Define your additional toolbar items
//     const additionalToolbarItems = [
//         'imageUpload', // Example: Add an image upload button
//         '|', // Separator
//         'customButton', // Example: Add a custom button to the toolbar
//     ];

//     return (
//         <>
//             <Grid container spacing={1}>
//                 <Grid item md={12} sm={12}>
//                     <label className='form-label'><b>{editorLabelText}</b></label>
//                     <CKEditor
//                         error={errPayload && errPayload.desc === ''}
//                         helperText={(errPayload && errPayload.desc === '') ? 'Data Required' : ''}
//                         editor={ClassicEditor}
//                         data={details.desc}
//                         config={{
//                             toolbar: {
//                                 items: [
//                                     'exportPDF', 'exportWord', '|',
//                                     'findAndReplace', 'selectAll', '|',
//                                     'heading', '|',
//                                     'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat', '|',
//                                     'bulletedList', 'numberedList', 'todoList', '|',
//                                     'outdent', 'indent', '|',
//                                     'undo', 'redo',
//                                     '-',
//                                     'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
//                                     'alignment', '|',
//                                     'link', 'insertImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock', 'htmlEmbed', '|',
//                                     'specialCharacters', 'horizontalLine', 'pageBreak', '|',
//                                     'textPartLanguage', '|',
//                                     'sourceEditing',
//                                     ...additionalToolbarItems, // Add the additional toolbar items here
//                                 ],
//                             },
//                         }}
//                         onReady={editor => {
//                             console.log('Editor is ready to use!', editor.getData());
//                         }}
//                         onChange={(event, editor) => {
//                             console.log(editor)
//                         }}
//                     />
//                 </Grid>
//             </Grid>
//         </>
//     );
// }

// export default CKTextEditor;


import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKTextEditor = ({ editorLabelText = '', payloadText = '' }) => {
    const payload = {
        name: '',
        desc: `
        <p></p>
        <p className="editor-text">${payloadText}</p>
        <p></p>
        `,
        isDefault: '',
        isSystem: '',
    }
    const [errPayload, setErrPayload] = useState({});
    const [details, setDetails] = useState(payload);

    // Define your additional toolbar items
    const additionalToolbarItems = [
        'imageUpload', // Example: Add an image upload button
        '|', // Separator
        'customButton', // Example: Add a custom button to the toolbar
    ];

    // Register custom toolbar items
    ClassicEditor.builtinPlugins.map(plugin => {
        if (additionalToolbarItems.includes(plugin.pluginName)) {
            ClassicEditor.create('', {
                plugins: [plugin],
            });
        }
        return null;
    });

    return (
        <>
            <Grid container spacing={1} className='px-4'>
                <Grid item md={12} sm={12}>
                    <label className='form-label'><b>{editorLabelText}</b></label>
                    <CKEditor
                        error={errPayload && errPayload.desc === ''}
                        helperText={(errPayload && errPayload.desc === '') ? 'Data Required' : ''}
                        editor={ClassicEditor}
                        data={details.desc}
                        config={{
                            toolbar: {
                                items: [
                                    'exportPDF', 'exportWord', '|',
                                    'findAndReplace', 'selectAll', '|',
                                    'heading', '|',
                                    'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat', '|',
                                    'bulletedList', 'numberedList', 'todoList', '|',
                                    'outdent', 'indent', '|',
                                    'undo', 'redo',
                                    '-',
                                    'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
                                    'alignment', '|',
                                    'link', 'insertImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock', 'htmlEmbed', '|',
                                    'specialCharacters', 'horizontalLine', 'pageBreak', '|',
                                    'textPartLanguage', '|',
                                    'sourceEditing',
                                    ...additionalToolbarItems, // Add the additional toolbar items here
                                ],
                            },
                        }}
                        onReady={editor => {
                            console.log('Editor is ready to use!', editor.getData());
                        }}
                        onChange={(event, editor) => {
                            console.log(editor, 'editor');
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default CKTextEditor;

