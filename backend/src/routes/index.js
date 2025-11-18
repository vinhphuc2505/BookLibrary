import author from './author/index.js';
import category from './category/index.js';
import book from './book/index.js';
import user from './user/index.js';
import borrowRecord from './borrow/index.js';
import image from './image/index.js';

function route(app) {
    app.use('/api', author);

    app.use('/api', category);

    app.use('/api', book);

    app.use('/api', user);

    app.use('/api', borrowRecord);

    app.use('/api', image);
}

export default route;