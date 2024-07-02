# FETU - Labour Progression Analysis Using Machine Learning

## Overview
This project leverages machine learning to analyze and predict labour progression, to aid obstetricians in the decision-making process during childbirth. Utilizing a dataset of various labour-related metrics, we have developed a model that can predict the 'labour_progression' parameter, which encapsulates the overall progression of labour.

## Dataset
The dataset used in this project (`fetal_health.csv`) contains multiple features related to childbirth, including fetal health parameters and maternal conditions. The target variable, 'labour_progression,' is a composite measure derived from principal component analysis (PCA) of the input features.

## Machine Learning Model
We have built a neural network model using PyTorch to predict the labour progression based on the input features. The model architecture consists of fully connected layers with ReLU activations, optimized using Mean Squared Error Loss and Adam optimizer.

## Training and Evaluation
The model was trained over 1000 epochs with a batch size of 64. During training, the Mean Squared Error (MSE) loss was recorded. The model's performance was evaluated using the R-squared (R2) score, which is a statistical measure of how close the data are to the fitted regression line.
