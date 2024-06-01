const controller = require('../controllers/todos');
const router = require('express').Router();

// CRUD Routes /users
router.get('/', controller.getTodos); 
router.get('/:todoId', controller.getTodo); 
router.post('/', controller.createTodo); 
router.put('/:todoId', controller.updateTodo);
router.delete('/:todoId', controller.updateTodo);

module.exports = router;