// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference

import authorType from '@/data/schemas/author'
import postType from '@/data/schemas/post'

import AuthorAvatarPreviewPane from './AuthorAvatarPreviewPane'
import PostPreviewPane from './PostPreviewPane'

export const previewDocumentNode = ({
  apiVersion,
  previewSecretId,
}) => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case authorType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({ document }) => (
              <AuthorAvatarPreviewPane
                name={document.displayed.name}
                picture={document.displayed.picture}
              />
            ))
            .title('Preview'),
        ])

      case postType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({ document }) => (
              <PostPreviewPane
                slug={document.displayed.slug?.current}
                apiVersion={apiVersion}
                previewSecretId={previewSecretId}
              />
            ))
            .title('Preview'),
        ])

      default:
        return null
    }
  }
}
