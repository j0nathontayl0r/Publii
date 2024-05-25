const AstCurrentSiteConfig = {
    uuid: '',
    name: '',
    displayName: '',
    synced: false,
    logo: {
        color: '',
        icon: ''
    },
    domain: '',
    language: 'en-gb',
    spellchecking: false,
    advanced: {
        cssCompression: 1,
        htmlCompression: 1,
        htmlCompressionRemoveComments: 1,
        imagesQuality: 60,
        alphaQuality: 100,
        forceWebp: false,
        webpLossless: false,
        responsiveImages: 1,
        mediaLazyLoad: 1,
        versionSuffix: 1,
        sitemapEnabled: 1,
        sitemapAddTags: 1,
        sitemapAddAuthors: 1,
        sitemapAddHomepage: 1,
        sitemapAddExternalImages: 0,
        sitemapExcludedFiles: '',
        usePageTitleInsteadItemName: false,
        openGraphEnabled: 1,
        openGraphImage: '',
        openGraphAppId: '',
        twitterCardsEnabled: 1,
        twitterCardsType: 'summary',
        twitterUsername: '',
        metaTitle: '%sitename',
        metaDescription: '',
        noIndexThisPage: false,
        noIndexForChatGPTBot: false,
        noIndexForChatGPTUser: false,
        noIndexForCommonCrawlBots: false,
        homepageNoIndexPagination: false,
        homepageNoPagination: false,
        metaRobotsIndex: 'index, follow',
        postMetaTitle: '%posttitle - %sitename ',
        postMetaDescription: '',
        pageMetaTitle: '%pagetitle - %sitename ',
        pageMetaDescription: '',
        pageUseTextWithoutCustomExcerpt: false,
        postUseTextWithoutCustomExcerpt: false,
        tagMetaTitle: 'Tag: %tagname - %sitename',
        tagMetaDescription: '',
        tagNoIndexPagination: false,
        tagNoPagination: false,
        metaRobotsTags: 'noindex, follow',
        tagsMetaTitle: 'All tags - %sitename',
        tagsMetaDescription: '',
        metaRobotsTagsList: 'noindex, follow',
        authorMetaTitle: 'Author: %authorname - %sitename',
        authorMetaDescription: '',
        metaRobotsAuthors: 'noindex, follow',
        authorNoIndexPagination: false,
        authorNoPagination: false,
        displayEmptyAuthors: false,
        displayEmptyTags: false,
        errorMetaTitle: 'Error 404 - %sitename',
        errorMetaDescription: '',
        metaRobotsError: 'noindex, follow',
        searchMetaTitle: 'Search - %sitename',
        searchMetaDescription: '',
        metaRobotsSearch: 'noindex, follow',
        postsListingOrderBy: 'created_at',
        postsListingOrder: 'DESC',
        featuredPostsListingOrderBy: 'created_at',
        featuredPostsListingOrder: 'DESC',
        hiddenPostsListingOrderBy: 'created_at',
        hiddenPostsListingOrder: 'DESC',
        feed: {
            title: 'displayName',
            titleValue: '',
            showFullText: 1,
            numberOfPosts: 10,
            showFeaturedImage: 1,
            enableRss: 1,
            enableJson: 1,
            updatedDateType: 'createdAt',
            showOnlyFeatured: 0,
            excludeFeatured: 0
        },
        urls: {
            cleanUrls: false,
            addIndex: false,
            postsPrefix: '',
            tagsPrefix: 'tags',
            authorsPrefix: 'authors',
            pageName: 'page',
            errorPage: '404.html',
            searchPage: 'search.html'
        },
        customHeadCode: '',
        customBodyCode: '',
        customCommentsCode: '',
        customSearchInput: '',
        customSearchContent: '',
        customFooterCode: '',
        gdpr: {
            enabled: false,
            popupTitlePrimary: 'This website uses cookies',
            popupDesc: 'Select which cookies to opt-in to via the checkboxes below; our website uses cookies to examine site traffic and user activity while on our site, for marketing, and to provide social media functionality.',
            showPrivacyPolicyLink: true,
            privacyPolicyLinkLabel: 'More details...',
            privacyPolicyPostId: 0,
            privacyPolicyLinkType: 'internal',
            privacyPolicyExternalUrl: '',
            groups: [
                { 
                    'name': 'Required', 
                    'id': '-', 
                    'description': '' 
                }
            ],
            embedConsents: [],
            gConsentModeEnabled: false,
            gConsentModeDefaultState: {
                ad_storage: false,
                ad_personalization: false,
                ad_user_data: false,
                analytics_storage: false,
                personalization_storage: false,
                functionality_storage: false,
                security_storage: false
            },
            gConsentModeGroups: [],
            saveButtonLabel: 'Accept all',
            behaviour: 'badge',
            badgeLabel: 'Cookie Policy',
            behaviourLink: '#cookie-settings',
            popupPosition: 'centered',
            popupShowRejectButton: false,
            popupRejectButtonLabel: 'Reject',
            allowAdvancedConfiguration: true,
            advancedConfigurationLinkLabel: 'Manage preferences',
            advancedConfigurationAcceptButtonLabel: 'Accept all',
            advancedConfigurationRejectButtonLabel: 'Reject all',
            advancedConfigurationSaveButtonLabel: 'Save settings',
            advancedConfigurationTitle: 'Cookie settings',
            advancedConfigurationDescription: 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
            advancedConfigurationShowDescriptionLink: true,
            cookieSettingsRevision: '1',
            cookieSettingsTTL: '90',
            debugMode: false,
            vimeoNoTrack: false,
            ytNoCookies: false,
            settingsVersion: ''
        },
        relatedPostsOrder: 'default',
        relatedPostsCriteria: 'titles-and-tags',
        relatedPostsIncludeAllPosts: true,
        editors: {
            wysiwygAdditionalValidElements: '',
            customElements: '',
            codemirrorTabSize: 4,
            codemirrorAutoIndent: true
        }
    },
    deployment: {
        protocol: '',
        relativeUrls: false,
        port: '',
        server: '',
        username: '',
        password: '',
        askforpassword: false,
        rejectUnauthorized: true,
        path: '',
        passphrase: '',
        sftpkey: '',
        s3: {
            customProvider: false,
            provider: 'aws',
            endpoint: '',
            id: '',
            key: '',
            bucket: '',
            region: '',
            customRegion: '',
            prefix: '',
            acl: 'public-read'
        },
        git: {
            url: '',
            branch: '',
            user: '',
            password: '',
            commitAuthor: '',
            commitEmail: '',
            commitMessage: 'Publii: update content'
        },
        github: {
            server: 'api.github.com',
            user: '',
            repo: '',
            branch: '',
            token: '',
            parallelOperations: 1,
            apiRateLimiting: 1
        },
        gitlab: {
            server: 'https://gitlab.com/',
            rejectUnauthorized: true,
            repo: '',
            branch: '',
            token: ''
        },
        netlify: {
            id: '',
            token: ''
        },
        google: {
            key: '',
            bucket: '',
            prefix: ''
        },
        manual: {
            output: 'catalog',
            outputDirectory: ''
        }
    }
};

module.exports = AstCurrentSiteConfig;
