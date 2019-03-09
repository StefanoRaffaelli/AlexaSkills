del index.zip 
cd lambda 
"C:\Program Files\7-Zip\7z" a -r ..\index.zip *
cd .. 
aws lambda update-function-code --function-name Ripasso_tabelline --zip-file fileb://index.zip