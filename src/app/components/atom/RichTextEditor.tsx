"use client"

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Essentials,
    CKFinderUploadAdapter,
    Autoformat,
    Bold,
    Italic,
    BlockQuote,
    CKBox,
    CKFinder,
    CloudServices,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    Table,
    TableToolbar,
    TextTransformation,
    Base64UploadAdapter,
    Font,
    CodeBlock,
    Clipboard
} from 'ckeditor5';
import { useRef } from 'react';

import 'ckeditor5/ckeditor5.css';

interface RichTextExditorProps {
    value: string
    onChange?: (e:any) => void
    onReady?: (e:any) => void
}

function RichTextExditor({ value, onChange, onReady }: RichTextExditorProps) {
    const editorRef = useRef()
    return (
        <CKEditor
            editor={ClassicEditor}
            config={{
                licenseKey: 'GPL',
                plugins: [Essentials,
                    CKFinderUploadAdapter,
                    Autoformat,
                    Bold,
                    Italic,
                    BlockQuote,
                    CKBox,
                    CKFinder,
                    CloudServices,
                    EasyImage,
                    Heading,
                    Image,
                    ImageCaption,
                    ImageStyle,
                    ImageToolbar,
                    ImageUpload,
                    Indent,
                    IndentBlock,
                    Link,
                    List,
                    MediaEmbed,
                    Paragraph,
                    PasteFromOffice,
                    PictureEditing,
                    Table,
                    TableToolbar,
                    TextTransformation,
                    Base64UploadAdapter,
                    Font,
                    CodeBlock,
                    Clipboard],
                toolbar: [
                    'undo', 'redo',
                    '|', 'heading',
                    '|', 'bold', 'italic',
                    '|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 
                    '|', 'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed',
                    '|', 'bulletedList', 'numberedList', 'outdent', 'indent',
                    "|", "codeBlock"
                ],
                image: {
                    toolbar: [
                        'imageStyle:inline',
                        'imageStyle:block',
                        'imageStyle:side',
                        '|',
                        'toggleImageCaption',
                        'imageTextAlternative'
                    ]
                },
                table: {
                    contentToolbar: [
                        'tableColumn',
                        'tableRow',
                        'mergeTableCells'
                    ]
                },
                language: 'en',
            }}
            data={value}
            content={value}
            onReady={(editor) => {
                editorRef.current = editor
                if (onReady) {
                    onReady(editor)
                }

            }}
            onChange={() => {
                if (onChange) {
                    onChange(editorRef.current?.getData())
                }
            }}
        />
    );
}

export default RichTextExditor