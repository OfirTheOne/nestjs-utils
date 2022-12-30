npm run build && \
npm pack && \
rm ./test-app/playground/nestjs-utils-1.0.0.tgz && \
mv ./nestjs-utils-1.0.0.tgz ./test-app/playground/nestjs-utils-1.0.0.tgz && \
cd ./test-app/playground && \
npm i file:./nestjs-utils-1.0.0.tgz