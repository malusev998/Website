﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#pragma warning disable 219, 612, 618
#nullable enable

namespace Database
{
    partial class DusanMalusevDbContextModel
    {
        partial void Initialize()
        {
            var contact = ContactEntityType.Create(this);
            var subscription = SubscriptionEntityType.Create(this);

            ContactEntityType.CreateAnnotations(contact);
            SubscriptionEntityType.CreateAnnotations(subscription);

            var sequences = new SortedDictionary<(string, string), ISequence>();
            var entityFrameworkHiLoSequence = new RuntimeSequence(
                "EntityFrameworkHiLoSequence",
                this,
                typeof(long),
                schema: "public",
                incrementBy: 10);

            sequences[("EntityFrameworkHiLoSequence", "public")] = entityFrameworkHiLoSequence;

            AddAnnotation("Relational:Sequences", sequences);
            AddAnnotation("Npgsql:HiLoSequenceName", "EntityFrameworkHiLoSequence");
            AddAnnotation("Npgsql:PostgresExtension:hstore", ",,");
            AddAnnotation("Npgsql:PostgresExtension:pg_stat_statements", ",,");
            AddAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SequenceHiLo);
            AddAnnotation("ProductVersion", "6.0.0-rc.1.21452.10");
            AddAnnotation("Relational:DefaultSchema", "public");
            AddAnnotation("Relational:MaxIdentifierLength", 63);
        }
    }
}
