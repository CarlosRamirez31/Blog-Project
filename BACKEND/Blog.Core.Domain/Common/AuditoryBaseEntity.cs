﻿namespace Blog.Core.Domain.Common
{
    public class AuditoryBaseEntity
    {
        public string CreatedBy { get; set; }
        public DateTime Created { get; set; }
        public string? LastModifiedBy { get; set; }
        public DateTime? LastModified { get; set; }
    }
}
