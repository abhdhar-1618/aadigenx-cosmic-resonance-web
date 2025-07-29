import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import { useToast } from '@/hooks/use-toast';
import { Download, Loader2 } from 'lucide-react';

export function BackgroundRemover() {
  const [processing, setProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const processUploadedImage = async () => {
    setProcessing(true);
    try {
      // Load the uploaded image
      const imageElement = await loadImageFromUrl('/lovable-uploads/48ba98fc-cb41-4583-93bb-423022b09079.png');
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create URL for the processed image
      const url = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(url);
      
      toast({
        title: 'Success!',
        description: 'Background removed successfully',
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: 'Error',
        description: 'Failed to remove background. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setProcessing(false);
    }
  };

  const downloadProcessedImage = () => {
    if (processedImageUrl) {
      const link = document.createElement('a');
      link.href = processedImageUrl;
      link.download = 'blog-card-no-background.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
        <CardHeader>
          <CardTitle>Background Removal Tool</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Original Image */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Original Image</h3>
              <div className="border border-white/20 rounded-lg p-4 bg-white/5">
                <img 
                  src="/lovable-uploads/48ba98fc-cb41-4583-93bb-423022b09079.png" 
                  alt="Original blog card"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Processed Image */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Background Removed</h3>
              <div className="border border-white/20 rounded-lg p-4 bg-white/5 min-h-[300px] flex items-center justify-center">
                {processedImageUrl ? (
                  <img 
                    src={processedImageUrl} 
                    alt="Background removed"
                    className="w-full rounded-lg"
                  />
                ) : (
                  <div className="text-center text-muted-foreground">
                    {processing ? 'Processing...' : 'Processed image will appear here'}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <Button 
              onClick={processUploadedImage} 
              disabled={processing}
              className="bg-primary hover:bg-primary/90"
            >
              {processing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Remove Background'
              )}
            </Button>
            
            {processedImageUrl && (
              <Button 
                onClick={downloadProcessedImage}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}