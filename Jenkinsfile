pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'quotehub'
        DOCKER_REGISTRY = 'docker.io'
    }

    stages {
        stage('Clone Code') {
            steps {
                git credentialsId: 'github-kanav', url: 'https://github.com/KanavJETHI/DevOps_Project.git', branch: 'master'
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
            // Stop any container using port 8081
                    bat '''
                        FOR /F %%i IN ('docker ps -q --filter "publish=8081"') DO docker stop %%i
                        FOR /F %%i IN ('docker ps -a -q --filter "publish=8081"') DO docker rm %%i
                        docker run -d --name quotehub_container -p 8081:80 quotehub
                        '''
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