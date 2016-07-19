'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/me', auth.isAuthenticated(), controller.me);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.post('/:id/album', auth.isAuthenticated(), controller.addAlbum);
router.post('/:id/photo', auth.isAuthenticated(), controller.addPhotoNewPlant);

module.exports = router;
