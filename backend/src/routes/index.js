import author from './author/index.js';
import category from './category/index.js';
import book from './book/index.js'

function route(app) {
    // Gắn router đã nhóm vào tiền tố /author trên ứng dụng chính
    app.use('/api', author);

    app.use('/api', category);

    app.use('/api', book);
}

export default route;