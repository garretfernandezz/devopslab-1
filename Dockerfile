FROM jenkins/jenkins:lts

USER root

# Install Docker to allow Jenkins to build and run Docker images
RUN apt-get update && apt-get install -y \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js (if needed for pipeline steps)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

USER jenkins