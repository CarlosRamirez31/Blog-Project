namespace Blog.Core.Application.Parameters
{
    public class PaginationRequest
    {
        public int NumPage { get; set; } = 1;
        public int NumRecordPage { get; set; } = 10;
        readonly int NumMaxRecordPage = 30;
        public string Order { get; set; } = "asc";
        public string? Sort { get; set; } = null; 

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
