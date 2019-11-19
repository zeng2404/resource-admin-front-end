import Bookmark from "./container/bookmark/Bookmark.jsx";
import Tag from './container/tag/Tag.jsx'

const routes = [
    {
        key: 'bookmark',
        path:'/bookmark',
        component: Bookmark,
    },
    {
        key: 'tag',
        path: '/tag',
        component: Tag,
    },
]

export default routes;