#--- Build stage ------
FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS build-env
WORKDIR /generator


# restore
# ------ instead stating individual projects, copying all projects to the 'build' directory
COPY . .

RUN dotnet restore

# copy src
#----- copy everything in the build context to the working directory
COPY . .

# build
#RUN find -type d -name bin -prune -exec rm -rf {} \; && find -type d -name obj -prune -exec rm -rf {} \;
RUN dotnet build -c Release --no-restore

# tests
RUN dotnet test LotteryService.Tests/LotteryService.Tests.csproj -c Release --no-build

# publish
RUN dotnet publish -c Release LotteryService/LotteryService.csproj -o /publish \
    --runtime alpine-x64 \
    --self-contained true \
    /p:PublishTrimmed=true \
    /p:PublishSingleFile=true

#--- Runtime stage ------
FROM mcr.microsoft.com/dotnet/runtime-deps:5.0-alpine
COPY --from=build-env /publish /publish
WORKDIR /publish
ENTRYPOINT ["./LotteryService"]