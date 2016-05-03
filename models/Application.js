require('./Application');
module.exports = bookshelf.model('Application', {
    tableName: 'applications',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
    colleges: function() {
        return this.belongsToMany('College', 'collegeApplications', 'collegeId', 'applicationId');
    }
});