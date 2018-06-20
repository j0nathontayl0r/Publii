export default {
    selector: '#post-editor',
    file_picker_types: 'image',
    plugins: "advlist autolink autosave link image lists hr anchor pagebreak searchreplace media table paste autoresize autosave",
    toolbar1: "bold italic underline strikethrough link unlink blockquote alignleft aligncenter alignright bullist numlist image gallery media table",
    toolbar2: "styleselect formatselect searchreplace hr readmore sourcecode removeformat undo redo restoredraft",
    toolbar3: "",
    block_formats: 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Address=address;Pre=pre;Code=code',
    extended_valid_elements: "a[*],altGlyph[*],altGlyphDef[*],altGlyphItem[*],animate[*],animateColor[*],animateMotion[*],animateTransform[*],circle[*],clipPath[*],color-profile[*],cursor[*],defs[*],desc[*],discard[*],ellipse[*],feBlend[*],feColorMatrix[*],feComponentTransfer[*],feComposite[*],feConvolveMatrix[*],feDiffuseLighting[*],feDisplacementMap[*],feDistantLight[*],feDropShadow[*],feFlood[*],feFuncA[*],feFuncB[*],feFuncG[*],feFuncR[*],feGaussianBlur[*],feImage[*],feMerge[*],feMergeNode[*],feMorphology[*],feOffset[*],fePointLight[*],feSpecularLighting[*],feSpotLight[*],feTile[*],feTurbulence[*],filter[*],font[*],font-face[*],font-face-format[*],font-face-name[*],font-face-src[*],font-face-uri[*],foreignObject[*],g[*],glyph[*],glyphRef[*],hatch[*],hatchpath[*],hkern[*],iframe[*],image[*],line[*],linearGradient[*],marker[*],mask[*],mesh[*],meshgradient[*],meshpatch[*],meshrow[*],metadata[*],missing-glyph[*],mpath[*],path[*],pattern[*],polygon[*],polyline[*],radialGradient[*],rect[*],set[*],solidcolor[*],stop[*],style[*],svg[*],switch[*],symbol[*],text[*],textPath[*],title[*],tref[*],tspan[*],unknown[*],use[*],view[*],vkern[*],publii-amp,publii-non-amp,script[*],i[*]",
    formats: {
        alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'align-left' },
        aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'align-center' },
        alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'align-right' },
        alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'align-justify' }
    },
    preview_styles: false,
    resize: false,
    menubar: false,
    forced_root_block : "",
    force_br_newlines : false,
    force_p_newlines : true,
    paste_as_text: false,
    keep_styles: false,
    image_class_list: [
        {title: 'None', value: ''},
        {title: 'Full image', value: 'post__image--full'},
        {title: 'Wide image', value: 'post__image--wide'},
        {title: 'Left-aligned image', value: 'post__image--left'},
        {title: 'Right-aligned image', value: 'post__image--right'},
        {title: 'Centered image', value: 'post__image--center'}
    ],
    element_format : 'html',
    fix_list_elements : true,
    image_caption: true,
    autosave_ask_before_unload: false,
    autosave_interval: "10s",
    autosave_restore_when_empty: false,
    autosave_retention: "30m",
    entity_encoding: "raw",
    allow_script_urls: true
};
