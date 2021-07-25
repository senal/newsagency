#----- Build stage ------
FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS build-env
WORKDIR /grocery-service

# restore
COPY . .

RUN dotnet restore

# Copy src
COPY . .

# build
RUN dotnet build -c Release --no-restore

# tests
RUN dotnet test GroceryService.Tests/GroceryService.Tests.csproj -c Release --no-build


# publish
RUN dotnet publish -c Release GroceryService/GroceryService.csproj -o /publish \
    --runtime alpine-x64 \
    --self-contained true \
    /p:PublishTrimmed=true \
    /p:PublishSingleFile=true


#--- Runtime stage ------
FROM mcr.microsoft.com/dotnet/runtime-deps:5.0-alpine
COPY --from=build-env /publish /publish
WORKDIR /publish
ENTRYPOINT ["./GroceryService"]