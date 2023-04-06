namespace Blog.Core.Application.Parameters
{
    public class PaginationRequest
    {
        public int NumPage = 1;
        public int NumRecordPage = 10;
        readonly int NumMaxRecordPage = 30;
        public string Order = "asc";
        public string? Sort = null; 
        
        

        public int Record
        {
            get => NumRecordPage;
            set
            {
                NumRecordPage = value > NumMaxRecordPage ? NumMaxRecordPage : value;
            }
        }
    }
}
