pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.48.1-noble' } }
   stages {
      stage('has title') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }stage('get started link') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }
      stage('Login with email') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }

   }
}