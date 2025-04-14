pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'quotehub'
        DOCKER_REGISTRY = 'docker.io'
    }

    stages {
        stage('Clone Code') {
            steps {
                git credentialsId: 'github-kanav', url: 'https://github.com/KanavJETHI/DevOps_Project.git'
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