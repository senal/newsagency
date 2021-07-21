#-------  Build stage -------------
FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS build-env
WORKDIR /generator

# restore
COPY . .
RUN dotnet restore

# copy src
COPY . .

# build
RUN dotnet build -c Release --no-restore

# test
RUN dotnet test PaperService.Tests/PaperService.Tests.csproj -c Release --no-build 

# publsih
RUN dotnet publish -c Release  PaperService/PaperService.csproj -o /publish \
    --runtime alpine-x64 \
    --self-contained true \
    /p:PublishTrimmed=true \
    /p:PublishSingleFile=true

#------ Runtime stage ------------
FROM mcr.microsoft.com/dotnet/runtime-deps:5.0-alpine
COPY --from=build-env /publish /publish
WORKDIR /publish
ENTRYPOINT ["./PaperService"]