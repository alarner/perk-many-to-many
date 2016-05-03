require('./Application');
module.exports = bookshelf.model('College', {
    tableName: 'colleges',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
    applications: function() {
        return this.belongsToMany('Application', 'collegeApplications', 'applicationId', 'collegeId');
    }
});