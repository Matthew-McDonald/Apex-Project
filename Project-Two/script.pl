# Set the script as strict to catch errors
use strict;
# import DBI
use DBI;

# connect to the people database
my $dbh = DBI->connect("dbi:SQLite:people.db");
#the query to execute
my $sql = qq/select * from peoplelist/;
#Prepares the query
my $sth = $dbh->prepare($sql);
#Executes the query
$sth->execute();
#Prints out the query data
my @row;
while (@row = $sth->fetchrow_array) {
  print join(", ", @row), "\n";
}
