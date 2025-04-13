pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'quotehub'
        DOCKER_REGISTRY = 'docker.io'
    }

    stages {
        stage('Clone Code') {
    steps {
        git credentialsId: '{AQAAABAAAABgz8lxxbpoArM1FVNkQ3cr+hnireVVgZ6nqDbdm7pZntlrCKWl9NQ9JI4xMmG4F9hr6gKpcQEcN9KVcw69gULpM4HXh6bph72K+xexYI9Atg9qm43CMS3L6WGSgqGnLbvEACRaUf/CB0z6mS1QoVvYLg==}', url: 'https://github.com/KanavJETHI/quotehub.git'
    }
}
        
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}")
                }
            }
        }
        
        stage('Run Docker Container') {
            steps {
                script {
                    dockerImage.run('-d -p 8081:80')  // Update port if necessary
                }
            }
        }
        
        stage('Clean Up') {
            steps {
                script {
                    dockerImage.remove()  // Optional: Remove Docker image after running the container
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()  // Clean up workspace
        }
    }
}