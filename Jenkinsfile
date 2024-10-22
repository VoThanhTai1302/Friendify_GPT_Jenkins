pipeline {
    agent any

    stages {
        stage('Install Dexpendencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        success {
            echo "All tests passed. Build status: ${currentBuild.result}"
        }
        failure {
            echo "Some tests failed. Build status: ${currentBuild.result}"
        }
    }
}
