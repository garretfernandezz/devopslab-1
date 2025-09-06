# Dockerfile.jenkins
FROM jenkins/jenkins:lts

USER root

# Install Node.js and Docker
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get update && apt-get install -y \
       nodejs \
       docker.io \
    && rm -rf /var/lib/apt/lists/*

# Add Jenkins user to Docker group
RUN usermod -aG docker jenkins

USER jenkins