using System.Reflection;
using System;
using Xunit;

namespace PaperService.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            // ✅ Just to test unit test build and run in the pipeline
            Assert.True(1 == 2);
        }
    }
}
